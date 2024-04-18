import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { selectUser } from './features/userSlice';
import { useSelector } from'react-redux';
import FlipMove from "react-flip-move";

const Feed = () => {

  const user = useSelector(selectUser)

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup function to unsubscribe from snapshot listener
    return () => unsubscribe();
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    // Add code here to send a post
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      text: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>

      {posts.map(({ id, data: { name, description, text, photoUrl } }) => (
        <Post
        key={id}
        name={name}
        description={description}
        message={text} // Changed from 'message' to 'text'
        photoUrl={photoUrl}
        />
        ))}
        </FlipMove>
      {/* Example hardcoded post */}
    </div>
  );
};

export default Feed;

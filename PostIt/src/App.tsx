import React, { useState } from "react";
import "./App.css";
import {
  Fab,
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface Post {
  image: string;
  caption: string;
}

export default function PostIt() {
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const toggleUpload = () => {
    setUpload(!upload);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePost = () => {
    if (image && caption) {
      const imageUrl = URL.createObjectURL(image);

      setPosts([...posts, { image: imageUrl, caption }]);
      setImage(null);
      setCaption("");
      setUpload(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 3,
        m: 10,
      }}
    >
      {posts.map((post, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Card
            className="post-card"
            sx={{
              maxWidth: 500,
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {post.caption}
              </Typography>
              <CardMedia
                component="img"
                className="image"
                sx={{
                  height: 300,
                  width: 470,
                  borderRadius: "10px",
                }}
                image={post.image}
                alt="Uploaded image"
              />
            </CardContent>
          </Card>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Fab
          color="secondary"
          size="small"
          aria-label="add"
          onClick={toggleUpload}
        >
          <AddIcon />
        </Fab>

        {upload && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 300,
            }}
          >
            <TextField
              label="Caption"
              variant="outlined"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <label htmlFor="upload-image" style={{ textAlign: "center" }}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-image"
                type="file"
                onChange={handleImageUpload}
              />
              <IconButton color="secondary" component="span">
                <CloudUploadIcon />
              </IconButton>
              <Typography variant="body2">
                {image ? image.name : "Choose an image"}
              </Typography>
            </label>

            <Button
              variant="contained"
              color="secondary"
              onClick={handlePost}
              disabled={!image || !caption}
            >
              Post
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

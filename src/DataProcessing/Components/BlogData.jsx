import { useEffect, useState } from "react";
import Data from "../../Assets/Blog.json"

export default function BlogData() {
    const [randomBlogs, setRandomBlogs] = useState([]);
    const [blogWithId1, setBlogWithId1] = useState(null);
    useEffect(() => {
        // Filter out the blog with id: 1
        const filteredBlogs = Data.filter(blog => blog.id !== 1);
        // Set the blog with id: 1 in a separate state
        const blog1 = Data.find(blog => blog.id === 1);
        setBlogWithId1(blog1);
        // Randomly choose 4 blogs from the filtered array
        const selectedBlogs = [];
        while (selectedBlogs.length < 3) {
            const randomIndex = Math.floor(Math.random() * filteredBlogs.length);
            const selectedBlog = filteredBlogs[randomIndex];
            selectedBlogs.push(selectedBlog);
            // Remove the selected blog to avoid duplicates
            filteredBlogs.splice(randomIndex, 1);
        }
        // Set the state with the randomly selected blogs
        setRandomBlogs(selectedBlogs);
    }, []);
    return (
        {
            randomBlogs, blogWithId1
        }
    )
}

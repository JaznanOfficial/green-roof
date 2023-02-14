import { cloudloggingOrigin } from "firebase-tools/lib/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogFetch } from "../redux/blogs/actions/actions";
import Blog from "./Blog";

const Blogs = () => {
    const dispatch = useDispatch()
    const blogs = useSelector((state) => state.blogs);

    useEffect(() => {
        dispatch(blogFetch())
    }, [])
    
    console.log(blogs)

    return (
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* <!-- single card  --> */}
            <Blog />
        </div>
    );
};

export default Blogs;

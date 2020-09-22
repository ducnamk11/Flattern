<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;

class BlogController extends Controller
{
    public function get_all_blog_post()
    {
        $posts = Post::orderByDesc('id')->with('user', 'category')->get();
        return response()->json([
            'posts' => $posts,
        ], 200);

    }

    public function get_post_by_id($id)
    {
        $post = Post::where('id', $id)->with('user', 'category')->first();
        return response()->json([
            'post' => $post,
        ], 200);
    }

    public function get_all_categories()
    {
        $categories = Category::all();
        return response()->json([
            'categories' => $categories,
        ], 200);
    }

    public function get_latest_post()
    {
        $latestpost = Post::orderByDesc('id')->take(5)->get();
        return response()->json([
            'latestpost' => $latestpost,
        ], 200);
    }

    public function get_post_by_category($id)
    {
        $post = Post::with('user', 'category')->where('cat_id', $id)->orderByDesc('id')->get();
        return response()->json([
            'getpostbycategory' => $post,
        ], 200);
    }
}

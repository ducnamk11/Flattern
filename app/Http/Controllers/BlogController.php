<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
   public function get_all_blog_post(){
       $posts = Post::orderByDesc('id')->with('user', 'category')->get();
       return response()->json([
           'posts' => $posts,
       ], 200);

   }
   public function get_post_by_id($id){
       $post = Post::where('id',$id)->with('user', 'category')->first();
       return response()->json([
           'post' => $post,
       ], 200);
   }
   public function get_all_categories(){
       $categories = Category::all();
       return response()->json([
           'categories' => $categories,
       ], 200);
   }
   public function get_latest_post(){
       $latestpost = Post::orderByDesc('id')->take(5)->get();
       return response()->json([
           'latestpost' => $latestpost,
       ], 200);
   }
}

<?php

namespace App\Http\Controllers;

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
}

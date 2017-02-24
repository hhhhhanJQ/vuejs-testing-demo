<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueController extends Controller
{
    public function index(Request $request)
    {
        return view('vue.index');
    }
}
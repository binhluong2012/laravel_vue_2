<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    function index(){
        $data = [
            'last_name' => 'binh',
            'first_name' => 'luong'
        ];
        return Inertia::render('Dashboard/index',$data);
    }
}

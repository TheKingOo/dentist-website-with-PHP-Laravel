<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RendezVousController extends Controller
{

    public function index()
    {
        return view('rendez-vous.index');
    }

}

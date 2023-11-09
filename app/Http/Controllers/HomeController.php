<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Appointment;
use League\CommonMark\Exception\InvalidArgumentException;

class HomeController extends Controller
{


    public function index()
    {
        return view('home.index');
    }
    public function store(Request $request)
    {   
        $data = $request->all();
        $data['date'] = date('y-m-d', strtotime( $data['date'])); 
        unset($data["_token"]);
        try {
            DB::table('appointment')->insert($data);
            $response = array("status"=>200);

        } catch (InvalidArgumentException $e) {
            $response = array("status"=>500);
        }
        return response()->json($response);

    }
    

}

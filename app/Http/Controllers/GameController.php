<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\GameRepository;

// use App\Game; not gonna need it, trying to put a simple repo

class GameController extends Controller
{

    protected $repo;

    public function __construct(        
        GameRepository $repo        
    ) {        
        $this->repo = $repo;       
    }

    public function getAllGames()
    {
        // get all Games

        return 'all games here';
    }

    public function createGame(Request $request)
    {
        // create a Game

        if($game = $this->repo->create($request->all())){

            return response()->json([
                'message' => 'game created',
                'object' => $game
            ], 201);

        }
        else{
            dd('not yet handled error here!!');
        }

    }

    public function getGame($id)
    {
        // get a Game
    }

    public function updateGame(Request $request, $id)
    {
        // update a Game
    }

    public function deleteGame($id)
    {
        // delete a Game
    }

}

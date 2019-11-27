<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\GameRepository;

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

        $games = $this->repo->getAll();

        $response = [     
            'items' => $games
        ];
       
        return response()->json($response, 201);
        
    }

    public function getUserGames($userId)
    {
        // get user Games

        $games = $this->repo->getByUserId($userId);

        $response = [            
            'items' => $games
        ];
       
        return response()->json($response, 201);
        
    }

    public function getLevels()
    {
        // get game levels

        $levels = $this->repo->getLevels();

        $response = [
            'items' => $levels
        ];
       
        return response()->json($response, 201);
        
    }

    public function createGame(Request $request)
    {
        // create a Game

        if($createdGame = $this->repo->create($request->all())){

            return response()->json([
                'object' => $createdGame
            ], 201);

        }
        else{
            return response()->json([
                'message' => 'error creating game'
            ], 500);
        }

    }

    public function getGame($id)
    {
        // get a Game

        if($game = $this->repo->getById($id)){

            return response()->json([
                'object' => $game
            ], 201);
            
        }
        else{
            return response()->json([
                'message' => 'game not found'
            ], 400);
        }

    }

    public function endGame(Request $request, $id)
    {
        // end the game (win or loose)

        $game = $this->repo->getById($id);
        $result = $request->result === 'true'? true: false;; 

        $this->repo->endGame($game, $result);

        return response()->json([
            'object' => $game
        ], 201);

    }

    public function deleteGame($id)
    {
        // delete a Game

        $game = $this->repo->getById($id);

        if($this->repo->delete($game)){

        }
        else{ 
            return response()->json([
                'message' => 'error deleting game'
            ], 500);
        }

    }

}

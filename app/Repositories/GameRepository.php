<?php
namespace App\Repositories;

use App\Game;

class GameRepository
{
    protected $gameModel;

    private $default_level = 1;

    public function __construct(
        Game $gameModel       
    ) {
        $this->gameModel = $gameModel;       
    }

    public function getAll()
    {
       
    }

    public function create($params)
    {
        $game = new Game;

        var_dump($params);
        exit();
        
        $game->user_id = 1;
        $game->level_id = $params->level_id || $this->default_level;
        $game->won = 0;

        // $game->save();
    
        return $game;
    }

    public function update(Game $gameModel, $params)
    {
       
    }

    public function delete(Game $gameModel)
    {
       
    }

}

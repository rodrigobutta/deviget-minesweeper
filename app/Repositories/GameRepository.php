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

    public function getById($id)
    {
        return $this->gameModel->find($id);
    }

    public function create($params)
    {
        $game = new Game;

        $user_id = $params['user_id'] ? intval($params['user_id']) : 1;
        $level_id = $params['level_id'] ? intval($params['level_id']) : $this->default_level;

        $game->user_id = $user_id;
        $game->level_id = $level_id;
        $game->won = 0;

        $game->save();
    
        return $game;
    }

    public function update(Game $gameModel, $params)
    {
       
    }

    public function delete(Game $gameModel)
    {
       
    }

}

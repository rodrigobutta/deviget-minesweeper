<?php
namespace App\Repositories;

use App\Game;

class GameRepository
{
    protected $gameModel;

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
       
    }

    public function update(Game $gameModel, $params)
    {
       
    }

    public function delete(Game $gameModel)
    {
       
    }

}

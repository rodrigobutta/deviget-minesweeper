<?php
namespace App\Repositories;

use App\Game;
use App\Level;

class GameRepository
{
    protected $gameModel;
    protected $levelModel;

    private $default_level = 1;

    public function __construct(
        Game $gameModel,
        Level $levelModel
    ) {
        $this->gameModel = $gameModel; 
        $this->levelModel = $levelModel;       
    }

    public function getAll()
    {
        return $this->gameModel::with('level','user')->get();
    }

    public function getLevels()
    {
        return $this->levelModel::get();
    }

    public function getById($id)
    {
        return $this->gameModel::with('level','user')->find($id);
    }

    public function getByUserId($id)
    {
        return $this->gameModel::with('level','user')->where('user_id',$id)->orderBy('created_at','DESC')->get();
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
    
        return $this->getById($game->id);
    }

    public function endGame(Game $game, $result)
    {
    
        $endedAt = \Carbon\Carbon::now();
        $game->ended_at = $endedAt->toDateTimeString();

        $game->won = $result?1:0;

        $game->save();
    
        return $this->getById($game->id);;
        
    }

    public function delete(Game $gameModel)
    {
        return false; // no game will be deleted this time!!
    }

}

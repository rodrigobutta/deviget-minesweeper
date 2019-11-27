<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str; 

class Game extends Model
{
    protected $guarded = []; 


    // change incremental ID for UUID

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($game) {
            $game->{$game->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

    // END change incremental ID for UUDI


    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function level()
    {
        return $this->belongsTo('App\Level');
    }

}

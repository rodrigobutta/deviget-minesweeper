<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      
        Schema::create('games', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->uuid('id')->primary();                  // i'll try to use uuid instead of incremental, it's very handy this times with layered patterns and all that
            $table->integer('user_id')->unsigned();         // relation to the session user
            $table->integer('level_id')->unsigned();        // i´ll use some level to group row, cols, mines relation
            $table->boolean('won')->default(0);             // flag of the resuklt
            $table->timestamp('ended_at')->nullable();      // date the game ended (won or lost)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}

<?php

use Illuminate\Database\Seeder;

use App\Level;

class LevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        $items = [            
            ['id' => 1, 'name' => 'Small Easy', 'cols' => 12, 'rows' => 12, 'mines' => 4],
            ['id' => 2, 'name' => 'Small Medium', 'cols' => 12, 'rows' => 12, 'mines' => 8],
            ['id' => 3, 'name' => 'Small Hard', 'cols' => 12, 'rows' => 12, 'mines' => 16],
            ['id' => 4, 'name' => 'Large Easy', 'cols' => 20, 'rows' => 20, 'mines' => 10],
            ['id' => 5, 'name' => 'Large Medium', 'cols' => 20, 'rows' => 20, 'mines' => 20],
            ['id' => 6, 'name' => 'Large Hard', 'cols' => 20, 'rows' => 20, 'mines' => 30]
        ];

        foreach ($items as $item) {
            Level::updateOrCreate(['id' => $item['id']], $item);
        }


    }
}

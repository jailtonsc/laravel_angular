<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        /*
        factory(\App\User::class)->create([
            'name' => 'Jailton',
            'email' => 'jailton.dos.santos.cruz@gmail.com',
            'password' => bcrypt(123456),
            'remember_token' => str_random(10)
        ]);*/

        factory(\App\User::class, 500)->create();

        Model::reguard();
    }
}

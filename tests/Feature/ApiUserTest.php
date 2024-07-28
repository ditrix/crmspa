<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiUserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user(): void
    {

        //  store user

        $data = [
            'permission_id' => 1,
            'name' => 'dmytro',
            'email' => 'ddd@mail.com',
            'phone' => '+38066064632',
            'password' => 'password',
            'is_active' => false
        ];

        // 'permission_id' => 'required',
        //             'name'          => 'nullable|string',
        //             'email'         => 'required|string',
        //             'phone'         => 'nullable|string',
        //             'password'      => 'required|string',
        //             'is_active'     => 'required|boolean'

        $response = $this->postJson('api/users',$data);

        $response->dump();

        $response->assertStatus(201);


        // $response = $this->getJson('api/permissions/'.$id);
        // $response->assertStatus(200)
        //     ->assertJson(['data' => $updated_data]);




        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

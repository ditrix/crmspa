<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiPermissionTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get(): void
    {
        $response = $this->getJson('api/permissions');
        $response->dump();
        $response->assertStatus(200);
    }
}

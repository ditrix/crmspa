<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'rw_own_customer',
        'rw_own_deals',
        'rw_own_reports',
        'rw_customer',
        'rw_deals',
        'rw_reports',
        'rw_options',
        'rw_parameters',
        'rw_users',
    ];
}

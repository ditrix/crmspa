<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected  $fillable = [
        'manager_id',
        'status',
        'name',
        'email',
        'phone',
        'address',
        'is_legal',
        'code',
        'contact_name',
        'contact_email',
        'contact_phone',
        'deleted_at'
    ];

}

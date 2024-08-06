<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    const STATUS_POTENCIAL = 'potencial';
    const STATUS_CURRENT = 'current';
    const STATUS_FORMER = 'former';

    protected $appends = ['status_name'];

    protected  $fillable = [
        'manager_id',
        'status',
        'name',
        'email',
        'phone',
        'address',
        'is_legal',
        'is_active',
        'code',
        'contact_name',
        'contact_email',
        'contact_phone',
        'deleted_at'
    ];

    public function getStatusNameAttribute()
    {
        switch ($this->status) {

            case self::STATUS_POTENCIAL:

                return 'potencial';

            case self::STATUS_CURRENT:

                return 'current';

            case self::STATUS_FORMER:

                return 'former';

            default:
                return 'unknown';
        }
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\photoProfile
 *
 * @property int $id_photo_profile
 * @property string $nama
 * @property string $url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile query()
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile whereIdPhotoProfile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|photoProfile whereUrl($value)
 * @mixin \Eloquent
 */
class photoProfile extends Model
{
    use HasFactory;

    protected $table = 'photo_profile';

    protected $primaryKey = 'id_photo_profile';
}

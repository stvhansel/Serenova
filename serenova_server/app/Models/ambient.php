<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ambient
 *
 * @property int $id_ambient
 * @property string $nama
 * @property string $url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ambient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ambient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ambient query()
 * @method static \Illuminate\Database\Eloquent\Builder|ambient whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ambient whereIdAmbient($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ambient whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ambient whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ambient whereUrl($value)
 * @mixin \Eloquent
 */
class ambient extends Model
{
    use HasFactory;

    protected $table = 'ambient';

    protected $primaryKey = 'id_ambient';
}

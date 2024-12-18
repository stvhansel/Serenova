<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\music
 *
 * @property int $id_music
 * @property string $nama
 * @property string $url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|music newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|music newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|music query()
 * @method static \Illuminate\Database\Eloquent\Builder|music whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|music whereIdMusic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|music whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|music whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|music whereUrl($value)
 * @mixin \Eloquent
 */
class music extends Model
{
    use HasFactory;

    protected $table = 'music';

    protected $primaryKey = 'id_music';
}

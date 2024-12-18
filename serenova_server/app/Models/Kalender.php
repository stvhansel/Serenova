<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Kalender
 *
 * @property int $id_kalender
 * @property string $tanggal
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender query()
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender whereIdKalender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Kalender whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Kalender extends Model
{
    use HasFactory;

    protected $table = 'kalender';

    protected $primaryKey = 'id_kalender';

    public function users(): BelongsToMany {
        return $this->belongsToMany(User::class, 'user_kalender', 'id_kalender', 'id_user');
    }

    public function jadwal(): HasMany {
        return $this->hasMany(Jadwal::class, 'id_kalender', 'id_kalender');
    }
}

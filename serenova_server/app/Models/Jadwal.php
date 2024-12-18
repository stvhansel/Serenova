<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Jadwal
 *
 * @property int $id_jadwal
 * @property string $nama
 * @property string $jenis
 * @property int $id_kalender
 * @property string $note
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal query()
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereIdJadwal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereIdKalender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereJenis($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Jadwal whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Jadwal extends Model
{
    use HasFactory;

    protected $table = 'jadwal';

    protected $primaryKey = 'id_jadwal';

    public function kalender(): BelongsTo {
        return $this->belongsTo(Kalender::class);
    }

    protected $fillable = [
        'id_kalender',
        'nama',
        'jenis',
        'start_time',
        'end_time',
        'note',
    ];


}

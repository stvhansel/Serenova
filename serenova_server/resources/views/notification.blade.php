<div>
    <h1> Jadwal Saya </h1>
    {{@foreach ($jadwal as $j)
        <div>
            <h1>{{$j->nama}}</h1>
            <p>{{$j->note}}</p>
            <p>{{$j->start_time}}</p>
            <p>{{$j->end_time}}</p>
        </div>
    @endforeach}}
</div>

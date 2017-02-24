@extends('base.layout')

@section('content')
    <div class="container">
        <div class="text-center">
            <h1>Testable Vue Components</h1>
        </div>
        <div id="task-tracker">
            <task-tracker></task-tracker>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ elixir('js/tasktracker.js') }}" type="text/javascript"></script>
@endsection

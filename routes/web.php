<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function(){
    return Inertia::render('Login');
});

Route::get('/dashboard', function(){
    return Inertia::render('Dashboard');
});


Route::get('/biodata', function(){
    return Inertia::render('Biodata');
});

Route::get('/setting', function(){
    return Inertia::render('Security_SignIn');
});

Route::get('/simkuliah', function(){
    return Inertia::render('SimKuliah');
});

Route::get('/krs', function(){
    return Inertia::render('DashboardKRS');
});

Route::get('/isikrs', function(){
    return Inertia::render('IsiKrs');
});

Route::get('/matakuliah', function(){
    return Inertia::render('MataKuliah');
});

Route::get('/pkrs', function(){
    return Inertia::render('PKRS');
});

Route::get('/transkrip', function(){
    return Inertia::render('Transkrip');
});

Route::get('/historinilai', function(){
    return Inertia::render('HistoriNilai');
});

Route::get('/ijazah', function(){
    return Inertia::render('Ijazah');
});

Route::get('/khs', function(){
    return Inertia::render('KHS');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// // });

// require __DIR__.'/auth.php';

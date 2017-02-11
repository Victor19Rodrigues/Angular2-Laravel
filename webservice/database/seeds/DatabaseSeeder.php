<?php

use Illuminate\Database\Seeder;
use App\Noticia;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Noticia::create([
          "titulo"=>"Notícia 1",
          "descricao"=>"Descrição da Notícia 1",
          "imagem"=>"http://materializecss.com/images/sample-1.jpg",
          "link"=>"Link Notícia 1",
        ]);
        Noticia::create([
          "titulo"=>"Notícia 2",
          "descricao"=>"Descrição da Notícia 2",
          "imagem"=>"http://materializecss.com/images/sample-1.jpg",
          "link"=>"Link Notícia 2",
        ]);

        Noticia::create([
          "titulo"=>"Notícia 3",
          "descricao"=>"Descrição da Notícia 3",
          "imagem"=>"http://materializecss.com/images/sample-1.jpg",
          "link"=>"Link Notícia 3",
        ]);

        Noticia::create([
          "titulo"=>"Notícia 4",
          "descricao"=>"Descrição da Notícia 4",
          "imagem"=>"http://materializecss.com/images/sample-1.jpg",
          "link"=>"Link Notícia 4",
        ]);

        echo "Noticias criadas!";

    }
}

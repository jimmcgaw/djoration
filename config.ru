use Rack::Static,
  :urls => ["/static/images", "/static/bower_components", "/static/js"],
  :root => "public/"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
Gem::Specification.new do |spec|
  spec.name          = "yoyoyo"
  spec.version       = "0.0.11"
  spec.authors       = ["Henry Zhang"]
  spec.email         = ["zhanghedev@outlook.com"]

  spec.summary       = "A beautiful, responsive Jekyll theme for programmers."
  spec.homepage      = "https://github.com/zh30/yoyoyo"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"
  spec.metadata["source_code_uri"] = "https://github.com/zh30/yoyoyo"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.8", ">= 3.8.5"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.2"

  spec.add_development_dependency "bundler", "~> 0"
end
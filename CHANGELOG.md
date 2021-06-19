# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2021-06-18
### Added
- Idea/Feedback channel icon.
- Introduction channel icon.
- Plugin channel icon.
- Theme channel icon.
- Snippet channel icon.
### Changed
- `CONTRIBUTING.md` to include sizing specifications.
### Removed
- Discriminator in `author` fields.

## [2.0.1] - 2021-06-11
### Fixed
- Icons being improperly sized on rule channels.
- Icons often obscuring the limited channel icon.
- A few manifest continuety errors.

## [2.0.0] - 2021-06-08
### Added
- `CHANGELOG.md` file.
- `CONTRIBUTING.md` file.
- Node configuration.
  - `compile` script.
  - `watch` script.
- Poll channels.
- Playground channels.
### Changed
- `source.scss` to more heavily rely on sass exclusive features.
- Screenshot location in `README.md`.
- Some information here and there to be more up-to-date.
### Removed
- Icons on all channels except text and announcement channels.
### Fixed
- Icon being applied to all paths, sometimes making it unclear whether the channel is private.

[2.1.0]: https://github.com/v-briese/channel-icons/compare/bae7b11..main
[2.0.1]: https://github.com/v-briese/channel-icons/compare/783b622..bae7b11
[2.0.0]: https://github.com/v-briese/channel-icons/compare/fc531eb..5a1294e

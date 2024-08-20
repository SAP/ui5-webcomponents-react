import Svg from '@site/static/img/github-icon.svg';

export default function GitHubNavBarItem() {
  return (
    <>
      <a
        href="https://github.com/SAP/ui5-webcomponents-react/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__item navbar__link header-github-link"
        aria-label="GitHub repository"
      >
        <Svg className="github__icon" />
      </a>
    </>
  );
}

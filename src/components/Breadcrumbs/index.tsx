import './Breadcrumbs.scss';

export interface BreadcrumbsProps {
  categories: string[];
}

function Breadcrumbs({ categories }: BreadcrumbsProps) {
  return (
    <ul className="breadcrumbs">
      {categories.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

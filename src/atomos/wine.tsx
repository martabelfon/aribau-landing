interface WineProps {
    image: string;
    name?: string;
    description?: string;
    technicalSheet?: string;
    history?: string;
    href?: string;
    imageAlt?: string;
  }
  
  export const Wine: React.FC<WineProps> = ({
    image,
    name,
    description,
    technicalSheet,
    history,
    href = '#',
    imageAlt = name,
  }) => {
    return (
      <div className="group relative">
        <img
          alt={imageAlt}
          src={image}
          className="aspect-square w-full h-90 rounded-md object-contain group-hover:opacity-75"
        />
        <div className="mt-4 text-center">
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
  
        {/* Optional fields */}
        {technicalSheet && (
          <div className="mt-2 text-sm text-gray-500">{technicalSheet}</div>
        )}
        {history && <div className="mt-2 text-sm text-gray-500">{history}</div>}
      </div>
    );
  };
  
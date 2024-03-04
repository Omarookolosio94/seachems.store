import { logoImg } from 'core/consts/images';
import { Helmet } from 'react-helmet';

interface Props {
  title?: string;
  description?: string;
}

export const addMetaData = ({ title = '', description = '' }: Props) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoImg} />
      </Helmet>
      <Helmet>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logoImg} />
      </Helmet>
    </div>
  );
};

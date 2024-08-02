
export default function ErrorPage({ statusCode }) {
    return (
      <p>
        {statusCode
         }
      </p>
    );
  }
  
  ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
import styles from './textContent.module.scss';

type textContentProps = {
  contents: string[],
}

export const TextContent: React.FC<textContentProps> = ({ contents }) => {
  return(
    <>
      {
        contents?.map(content => <p>{content}</p>)
      }
    </>)
};
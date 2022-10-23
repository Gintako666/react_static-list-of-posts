import React from 'react';
import { Comment } from '../../type/type';

export type CommentInfoProps = {
  comment: Comment
};

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </>
  );
};

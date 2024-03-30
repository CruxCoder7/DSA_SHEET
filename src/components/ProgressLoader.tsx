'use client';
import { ProgressLoader as Loader } from 'nextjs-progressloader';

export default function ProgressLoader() {
  return (
    <Loader
      color="#ffcd81"
      height={7}
      template='<div class="bar" role="bar"><div class="peg"></div></div>'
    />
  );
}

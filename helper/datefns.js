import { formatDistanceToNow, format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function DateFNS({date, dateFormat = 'now'}) {
  return (
    <>
      <div>{dateFormat == 'now' ? formatDistanceToNow(new Date(date), {locale: id, addSuffix: true}) : format(new Date(date), dateFormat, {locale: id})}</div>
    </>
  );
}
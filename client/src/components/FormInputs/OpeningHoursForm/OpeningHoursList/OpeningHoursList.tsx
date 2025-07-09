function OpeningHoursList({
  list,
  showList,
  openingHours,
  setOpeningHours,
}: {
  list: SingleDayOpeningHours[];
  showList: boolean;
  openingHours: SingleDayOpeningHours[];
  setOpeningHours: React.Dispatch<
    React.SetStateAction<SingleDayOpeningHours[]>
  >;
}) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idToDelete = (e.currentTarget as HTMLButtonElement).dataset.id;
    setOpeningHours(
      openingHours.filter((day) => String(day.id) !== idToDelete),
    );
  };

  return (
    <ul className={`validated-opening-hours-list${showList ? " visible" : ""}`}>
      {list.map((sdoh) => (
        <li key={sdoh.id}>
          <p>{sdoh.weekDay}</p>
          <p>
            {sdoh.openingHourNoon}-{sdoh.closingHourNoon}
            {sdoh.openingHourEvening && sdoh.closingHourEvening
              ? ` / ${sdoh.openingHourEvening}-${sdoh.closingHourEvening}`
              : ""}
          </p>
          <button type="button" onClick={handleDelete} data-id={sdoh.id}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default OpeningHoursList;

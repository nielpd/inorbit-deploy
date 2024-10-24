type CreateGoalRequest = {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  const res = await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    console.error('Network response was not ok.');
    return null;
  }
}
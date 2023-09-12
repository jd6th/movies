import React from 'react';
import {
  IconMovie,
  IconCalendarEvent,
  IconMessages,
  IconDatabase,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group } from '@mantine/core';
import Link from 'next/link';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
}

function MainLink({ icon, color, label, url }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Link href={url}>{label}</Link>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconMovie size="1rem" />, color: 'blue', label: 'Movies', url: '/movies' },
  { icon: <IconCalendarEvent size="1rem" />, color: 'teal', label: 'Schedules', url: '/schedules' },
  { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Discussions', url: '/movies' },
  { icon: <IconDatabase size="1rem" />, color: 'grape', label: 'Databases', url: '/schedules' },
];

export function Sidebar() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

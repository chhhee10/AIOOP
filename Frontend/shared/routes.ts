
import { z } from 'zod';
import { 
  insertActivitySchema, 
  insertNoticeSchema, 
  insertFacilitySchema, 
  insertMemberSchema, 
  insertContactSchema,
  activities,
  notices,
  facilities,
  members,
  contactSubmissions
} from './schema';

// Export everything from schema so frontend can import from here if it wants
export * from './schema';

export const api = {
  activities: {
    list: {
      method: 'GET' as const,
      path: '/api/activities',
      responses: {
        200: z.array(z.custom<typeof activities.$inferSelect>()),
      },
    },
  },
  notices: {
    list: {
      method: 'GET' as const,
      path: '/api/notices',
      responses: {
        200: z.array(z.custom<typeof notices.$inferSelect>()),
      },
    },
  },
  facilities: {
    list: {
      method: 'GET' as const,
      path: '/api/facilities',
      responses: {
        200: z.array(z.custom<typeof facilities.$inferSelect>()),
      },
    },
  },
  members: {
    list: {
      method: 'GET' as const,
      path: '/api/members',
      responses: {
        200: z.array(z.custom<typeof members.$inferSelect>()),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: z.custom<typeof contactSubmissions.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

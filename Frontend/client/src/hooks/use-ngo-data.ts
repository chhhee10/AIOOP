import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertContactSubmission } from "@shared/routes";

// ==========================================
// Activities
// ==========================================
export function useActivities() {
  return useQuery({
    queryKey: [api.activities.list.path],
    queryFn: async () => {
      const res = await fetch(api.activities.list.path);
      if (!res.ok) throw new Error("Failed to fetch activities");
      return api.activities.list.responses[200].parse(await res.json());
    },
  });
}

// ==========================================
// Notices
// ==========================================
export function useNotices() {
  return useQuery({
    queryKey: [api.notices.list.path],
    queryFn: async () => {
      const res = await fetch(api.notices.list.path);
      if (!res.ok) throw new Error("Failed to fetch notices");
      return api.notices.list.responses[200].parse(await res.json());
    },
  });
}

// ==========================================
// Facilities
// ==========================================
export function useFacilities() {
  return useQuery({
    queryKey: [api.facilities.list.path],
    queryFn: async () => {
      const res = await fetch(api.facilities.list.path);
      if (!res.ok) throw new Error("Failed to fetch facilities");
      return api.facilities.list.responses[200].parse(await res.json());
    },
  });
}

// ==========================================
// Members
// ==========================================
export function useMembers() {
  return useQuery({
    queryKey: [api.members.list.path],
    queryFn: async () => {
      const res = await fetch(api.members.list.path);
      if (!res.ok) throw new Error("Failed to fetch members");
      return api.members.list.responses[200].parse(await res.json());
    },
  });
}

// ==========================================
// Contact Form
// ==========================================
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid input");
        }
        throw new Error("Failed to send message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}

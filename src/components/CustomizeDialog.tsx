'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Checkbox,
  Typography,
  IconButton,
} from '@mui/material';
import { GripVertical, X, LucideIcon } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { tokens } from '@/theme/theme';
import { mainNavItems } from '@/config/navigation';
import { useNavigation } from '@/contexts/NavigationContext';

type SortableItemProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  checked: boolean;
  onToggle: () => void;
};

function SortableItem({ id, label, icon: Icon, checked, onToggle }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        py: 1,
        px: 2,
        borderRadius: `${tokens.borderRadius}px`,
        border: `1px solid ${tokens.colors.border}`,
        backgroundColor: tokens.colors.topBar,
        mb: 1,
        cursor: 'grab',
        '&:active': {
          cursor: 'grabbing',
        },
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          color: tokens.colors.secondaryText,
        }}
      >
        <GripVertical size={tokens.iconSize} />
      </Box>
      <Icon size={tokens.iconSize} />
      <Typography sx={{ flex: 1, fontSize: tokens.typography.body2, color: tokens.colors.primaryText }}>
        {label}
      </Typography>
      <Checkbox 
        checked={checked} 
        onChange={onToggle}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        sx={{ cursor: 'pointer' }}
      />
    </Box>
  );
}

type CustomizeDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function CustomizeDialog({ open, onClose }: CustomizeDialogProps) {
  const { pinnedItems, setPinnedItems, itemOrder, setItemOrder } = useNavigation();
  const [localPinned, setLocalPinned] = useState<string[]>(pinnedItems);
  const [localOrder, setLocalOrder] = useState<string[]>(itemOrder);

  useEffect(() => {
    if (open) {
      setLocalPinned(pinnedItems);
      setLocalOrder(itemOrder);
    }
  }, [open, pinnedItems, itemOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setLocalOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleToggle = (itemId: string) => {
    setLocalPinned((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const handleSave = () => {
    setPinnedItems(localPinned);
    setItemOrder(localOrder);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const orderedItems = localOrder
    .map(id => mainNavItems.find(item => item.id === id))
    .filter(Boolean) as typeof mainNavItems;

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 500 }}>
          Customize navigation
        </Typography>
        <IconButton onClick={handleCancel} size="small">
          <X size={tokens.iconSize} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ fontSize: tokens.typography.body2, color: tokens.colors.secondaryText, mb: 2 }}>
          Drag to reorder and choose which icons to show. Extra items go into the "•••" menu.
        </Typography>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={localOrder} strategy={verticalListSortingStrategy}>
            {orderedItems.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                checked={localPinned.includes(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 1, justifyContent: 'space-between' }}>
        <Button 
          onClick={handleCancel}
          sx={{ 
            color: tokens.colors.secondaryText,
            textTransform: 'none',
            fontWeight: 400,
          }}
        >
          Cancel
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSave}
          sx={{
            backgroundColor: tokens.colors.primary,
            color: '#FFFFFF',
            fontWeight: 500,
            textTransform: 'none',
            px: 3,
            '&:hover': {
              backgroundColor: tokens.colors.primary,
              opacity: 0.9,
            },
            '&:focus-visible': {
              outline: `2px solid ${tokens.colors.primary}`,
              outlineOffset: 2,
            },
          }}
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
